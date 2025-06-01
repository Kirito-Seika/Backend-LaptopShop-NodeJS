import { prisma } from "config/client"

const fetchProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

export {
    fetchProducts
}