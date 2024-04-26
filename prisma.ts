import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "Daffa",
    email: "jaky@gmail.com",
    phone: "08869003732",
  },
});
console.log(contact);
