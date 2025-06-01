import { prisma } from "config/client"

const fetchProducts = async (excludeId?: number) => {
    const products = await prisma.product.findMany({
        where: excludeId ? { id: { not: excludeId } } : {},
        take: 12,
    });
    return products;
}

const fetchProductById = async (id: number) => {
    return await prisma.product.findUnique({
        where: { id },
        include: {
            category: true,
        },
    })
}

const fetchRandomProducts = async (excludeId?: number) => {
    const products = await prisma.$queryRaw`
    SELECT * FROM products
    WHERE id != ${excludeId ?? 0}
    ORDER BY RAND()
    LIMIT 5
  `;
    return products;
};

export {
    fetchProducts, fetchProductById, fetchRandomProducts
}