import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const {
      pickupAddress,
      dropoffAddress,
      pickupLat,
      pickupLng,
      dropoffLat,
      dropoffLng,
      distance,
      estimatedPrice,
      pickupTime,
      bookingType,
      specialRequests,
      vehicleType
    } = body;

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        pickupAddress,
        dropoffAddress,
        pickupLat,
        pickupLng,
        dropoffLat,
        dropoffLng,
        distance,
        estimatedPrice,
        pickupTime: new Date(pickupTime),
        bookingType,
        specialRequests,
        status: "PENDING"
      },
      include: {
        user: {
          select: {
            name: true,
            phone: true
          }
        }
      }
    });

    // Find available drivers
    const availableDrivers = await prisma.driver.findMany({
      where: {
        isActive: true,
        isAvailable: true
      },
      include: {
        vehicle: true
      }
    });

    // TODO: Implement driver assignment logic
    // For now, we'll just create the booking without assigning a driver

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const bookings = await prisma.booking.findMany({
      where: {
        userId: userId
      },
      include: {
        driver: {
          select: {
            name: true,
            phone: true
          }
        },
        vehicle: {
          select: {
            make: true,
            model: true,
            licensePlate: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
} 