import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const destinations = await prisma.destination.findMany({
        include: {
            packages: {
                include: {
                    itinerary: true
                }
            }
        }
    });
    console.log(JSON.stringify(destinations, null, 2));
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
