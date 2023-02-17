import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newArtist =  prisma.artist.create({
        data:{
            name: 'Atharva',
            email: 'atharvagadkari0512@gmail.com',
            songs :{
                create:{
                    title:'the boys',
                }
            }
            
        }
    })
    console.log('Artist created', newArtist)

    const allArtists = await prisma.artist.findMany({
        include: { songs: true },
      })
      console.log('All artists: ')
      console.dir(allArtists, { depth: null })
    }
    
    main()
      .catch((e) => console.error(e))
      .finally(async () => await prisma.$disconnect())
}