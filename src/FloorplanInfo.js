const FloorPlanInfo = [
    {
        floorPlanId: 1,
        name: 'One bedroom',
        description: 'A charming studio apartment featuring an open layout, modern kitchenette, and a private bathroom. Ideal for those seeking a compact and comfortable living space.',
        monthlyRent: 1599,
        available: false,
        image: 'https://placehold.co/600x400'
    },
    {
        floorPlanId: 2,
        name: 'Two bedroom',
        description: 'Spacious One-Bedroom" Description: A generous one-bedroom apartment with a separate living area, fully equipped kitchen, and a cozy bedroom with ample closet space.',
        monthlyRent: 1799,
        available: false,
        image: 'https://placehold.co/600x400'
    },
    {
        floorPlanId: 3,
        name: 'Three bedroom',
        description: 'Family-Friendly Two-Bedroom" Description: A family-friendly two-bedroom apartment with a large living room, dining area, two bathrooms, and a balcony offering scenic views.',
        monthlyRent: 2199,
        available: true,
         image: 'https://placehold.co/600x400'
    }
];

const ApartmentAvailability = [
    {
        floorPlanId: 1,
        availability: {
            unitId: 1,
            unitNumber: '1-100',
            monthlyRent: 2199,
            available: false
        }
    },
    {
        floorPlanId: 2,
        availability: {
            unitId: 1,
            unitNumber: '1-100',
            monthlyRent: 2199,
            available: false
        }
    },
    {
        floorPlanId: 3,
        availability: {
            unitId: 1,
            unitNumber: '1-100',
            monthlyRent: 2199,
            available: true
        }
    }
]


export {FloorPlanInfo, ApartmentAvailability};