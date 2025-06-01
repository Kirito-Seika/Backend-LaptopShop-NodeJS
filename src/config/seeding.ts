import { prisma } from "config/client";
import { hashPassword } from "services/admin/admin.service";
import { ACCOUNT_TYPE } from "./constant";

const createDatabase = async () => {
    const countUser = await prisma.user.count();
    const countRole = await prisma.role.count();
    const countFactory = await prisma.factory.count();
    const countCategory = await prisma.category.count();
    const countProduct = await prisma.product.count();
    const defaultPassword = await hashPassword('123456');
    if (countRole === 0) {
        await prisma.role.createMany({
            data: [
                {
                    name: 'ADMIN',
                    description: 'Admin có tất cả quyền hạn'
                },
                {
                    name: 'USER',
                    description: 'User chỉ có quyền hạn thông thường'
                },
            ]
        });
    }
    if (countFactory === 0) {
        await prisma.factory.createMany({
            data: [
                {
                    name: 'MLB Korea',
                    description: "MLB Korea là một thương hiệu thời trang nổi tiếng đến từ Hàn Quốc, được yêu thích bởi giới trẻ nhờ phong cách thể thao, năng động và những thiết kế trẻ trung, bắt mắt."
                },
                {
                    name: 'Christian Dior',
                    description: "Christian Dior là một trong những thương hiệu thời trang xa xỉ hàng đầu thế giới, nổi tiếng với những thiết kế tinh tế, sang trọng và đẳng cấp. Bên cạnh những bộ váy áo haute couture, túi xách Dior cũng là một trong những sản phẩm được săn đón nhiều nhất."
                },
                {
                    name: 'Gucci',
                    description: "Gucci là một trong những thương hiệu túi xách nữ nổi tiếng và được yêu thích trên toàn thế giới. Được thành lập vào năm 1921 tại Florence, Ý, các mẫu túi xách Gucci luôn thu hút với các chi tiết biểu tượng như logo GG lồng vào nhau, họa tiết monogram, cùng các thiết kế sáng tạo từ phong cách cổ điển đến hiện đại."
                },
                {
                    name: 'Chanel',
                    description: "Chanel là một thương hiệu thời trang cao cấp được thành lập vào năm 1909 bởi Coco Chanel. Với thiết kế sang trọng, tinh tế và sử dụng chất liệu da cao cấp, túi xách Chanel trở thành biểu tượng của sự giàu có, kết hợp với gu thẩm mỹ cao các mẫu túi của Chanel được nhiều quý cô lựa chọn."
                },
                {
                    name: 'Louis Vuitton',
                    description: `Louis Vuitton được thành lập vào năm 1854 tại Paris, Pháp. Thương hiệu này nổi tiếng với thiết kế sang trọng, tinh tế và sử dụng chất liệu da và vải canvas cao cấp. Logo "LV" đặc trưng cũng là một trong những yếu tố làm nên thương hiệu của Louis Vuitton.`
                },
                {
                    name: 'Prada',
                    description: "Prada là thương hiệu túi xách cao cấp nổi tiếng đến từ Ý, được thành lập vào năm 1913 bởi Mario Prada. Prada nổi bật với phong cách thanh lịch, tối giản nhưng không kém phần hiện đại, mang đến cho người dùng cảm giác sang trọng và tinh tế."
                },
                {
                    name: 'Coach',
                    description: "Coach chính là thương hiệu thời trang đến từ Mỹ, được ra đời năm 1941, chuyên về sản phẩm da cao cấp. Trải qua 80 năm hoạt động, Coach đã nâng cao giá trị thương hiệu lên đến 3,2 tỷ USD."
                },
                {
                    name: 'Michael Kors',
                    description: "Michael Kors là hãng thời trang thuộc công ty Michael Kors Holdings Limited, ra đời năm 1981 bởi nhà thiết kế cùng tên. Với 40 năm hoạt động, thương hiệu túi xách nữ Michael Kors đã mở rộng quy mô và được nhiều người biết đến."
                },
                {
                    name: 'Juno',
                    description: "Là một tín đồ thời trang, bạn không thể nào không biết đến thương hiệu túi xách Juno. Có thể nói rằng, đây chính là cái tên khá quen thuộc đối với người dùng tại Việt Nam."
                },
                {
                    name: 'Zara',
                    description: "Zara là thương hiệu phụ kiện, quần áo đến từ Tây Ban Nha, có trụ sở tại Arteixo, Galicia. Hãng thời trang được thành lập bởi Amancio Ortega và Rosalía Mera, vào năm 1975."
                },
                {
                    name: 'Charles & Keith',
                    description: "Charles & Keith là thương hiệu được ra ra bởi 2 anh em Charles Wong & Keith Wong. Vào năm 1996, hãng thời trang Charles & Keith chính thức trình làng tại Amara Shopping Centre, Singapore."
                },
                {
                    name: 'Pedro',
                    description: "Thương hiệu Pedro ra mắt vào năm 2006 bởi tập đoàn Charles & Keith. Nhãn hiệu con của Charles and Keith tập trung vào các dòng sản phẩm dành cho nam giới."
                },
                {
                    name: 'Furla',
                    description: "Furla được thành lập năm 1927 tại Ý, bởi 2 vợ chồng Aldo và Margherita Furlanetto. Từ năm 1970 - 1980, họ bắt đầu tập trung thiết kế sản phẩm mang bản sắc riêng. Những bộ sưu tập túi xách và phụ kiện thời trang bằng da lần lượt được ra đời."
                },
                {
                    name: 'Lemino',
                    description: "Được ví như một bản giao hưởng êm ái, thương hiệu túi xách nữ Lemino mang một màu sắc vô cùng trẻ trung và thanh lịch. Với thiết kế sang trọng, hiện đại, Lemino đang tạo nên cơn sốt khủng khiếp trên thị trường thế giới."
                },
            ]
        })
    }
    if (countCategory === 0) {
        await prisma.category.createMany({
            data: [
                { name: 'Handbag' },
                { name: 'Trousers' },
                { name: 'Shirt' }
            ]
        })
    }
    if (countProduct === 0) {
        const mlbkFacroty = await prisma.factory.findFirst({
            where: {
                name: 'MLB Korea'
            }
        })
        const diorFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Christian Dior'
            }
        })
        const gucciFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Gucci'
            }
        })
        const chanelFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Chanel'
            }
        })
        const louisFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Louis Vuitton'
            }
        })
        const pradaFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Prada'
            }
        })
        const coachFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Coach'
            }
        })
        const michaelFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Michael Kors'
            }
        })
        const junoFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Juno'
            }
        })
        const zaraFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Zara'
            }
        })
        const charlesFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Charles & Keith'
            }
        })
        const pedroFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Pedro'
            }
        })
        const furlaFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Furla'
            }
        })
        const leminoFacroty = await prisma.factory.findFirst({
            where: {
                name: 'Lemino'
            }
        })
        const handbagCategory = await prisma.category.findFirst({
            where: {
                name: 'Handbag'
            }
        })
        const trousersCategory = await prisma.category.findFirst({
            where: {
                name: 'Trousers'
            }
        })
        const shirtCategory = await prisma.category.findFirst({
            where: {
                name: 'Shirt'
            }
        })
        if (
            mlbkFacroty && diorFacroty && gucciFacroty && chanelFacroty && louisFacroty
            && pradaFacroty && coachFacroty && michaelFacroty && junoFacroty && zaraFacroty
            && charlesFacroty && pedroFacroty && furlaFacroty && leminoFacroty &&
            handbagCategory && trousersCategory && shirtCategory
        ) {
            await prisma.product.createMany({
                data: [
                    {
                        name: 'Handmade VLS 9000',
                        price: 2500000,
                        quantity: 36,
                        image: 'enlarged-1.jpg',
                        description: 'Túi da cao cấp với thiết kế sang trọng, phù hợp cho những ai yêu thích phong cách cổ điển và thanh lịch.',
                        sold: 25,
                        target: 'Du Lịch',
                        weight: 0.5,
                        material: 'Da bò',
                        dimension: '36cm x 9cm x 28cm',
                        categoryID: handbagCategory.id,
                        factoryID: mlbkFacroty.id,
                        country: 'Hàn Quốc'
                    },
                    {
                        name: 'Handmade VLS 9001',
                        price: 2300000,
                        quantity: 30,
                        image: 'enlarged-2.jpg',
                        description: 'Mẫu túi đa năng, chất liệu bền bỉ chống thấm nước, lý tưởng cho việc sử dụng hàng ngày và đi công tác.',
                        sold: 18,
                        target: 'Đi Làm',
                        weight: 0.45,
                        material: 'Da tổng hợp',
                        dimension: '34cm x 10cm x 26cm',
                        categoryID: handbagCategory.id,
                        factoryID: diorFacroty.id,
                        country: 'Pháp'
                    },
                    {
                        name: 'Handmade VLS 9002',
                        price: 2700000,
                        quantity: 28,
                        image: 'enlarged-3.jpg',
                        description: 'Túi đeo chéo nhỏ gọn, tiện lợi cho việc di chuyển trong thành phố, với nhiều ngăn chứa đồ thông minh.',
                        sold: 20,
                        target: 'Đi Phố',
                        weight: 0.4,
                        material: 'Da bò',
                        dimension: '32cm x 8cm x 24cm',
                        categoryID: handbagCategory.id,
                        factoryID: gucciFacroty.id,
                        country: 'Ý'
                    },
                    {
                        name: 'Handmade VLS 9003',
                        price: 2600000,
                        quantity: 25,
                        image: 'enlarged-4.jpg',
                        description: 'Thiết kế hiện đại với màu sắc trẻ trung, phù hợp cho các bạn trẻ năng động và yêu thích phong cách thời trang mới.',
                        sold: 22,
                        target: 'Đi Học',
                        weight: 0.5,
                        material: 'Da thật',
                        dimension: '35cm x 9cm x 27cm',
                        categoryID: handbagCategory.id,
                        factoryID: chanelFacroty.id,
                        country: 'Pháp'
                    },
                    {
                        name: 'Handmade VLS 9004',
                        price: 2400000,
                        quantity: 40,
                        image: 'enlarged-5.jpg',
                        description: 'Túi xách tay thanh lịch, làm từ da thật mềm mại, rất thích hợp để đi làm hoặc dự tiệc.',
                        sold: 30,
                        target: 'Dự Tiệc',
                        weight: 0.55,
                        material: 'Da bò',
                        dimension: '38cm x 10cm x 29cm',
                        categoryID: handbagCategory.id,
                        factoryID: louisFacroty.id,
                        country: 'Tây Ban Nha'
                    },
                    {
                        name: 'Handmade VLS 9005',
                        price: 2800000,
                        quantity: 22,
                        image: 'enlarged-6.jpg',
                        description: 'Túi backpack kiểu dáng thể thao, có nhiều ngăn lớn nhỏ, phù hợp cho những chuyến đi phượt hoặc dã ngoại.',
                        sold: 15,
                        target: 'Du Lịch',
                        weight: 0.6,
                        material: 'Da tổng hợp',
                        dimension: '40cm x 12cm x 30cm',
                        categoryID: handbagCategory.id,
                        factoryID: pradaFacroty.id,
                        country: 'Úc'
                    },
                    {
                        name: 'Handmade VLS 9006',
                        price: 2550000,
                        quantity: 27,
                        image: 'enlarged-7.jpg',
                        description: 'Túi đựng laptop cao cấp, bảo vệ tốt thiết bị, thiết kế tối giản nhưng không kém phần sang trọng.',
                        sold: 24,
                        target: 'Đi Làm',
                        weight: 0.7,
                        material: 'Da thật',
                        dimension: '38cm x 10cm x 28cm',
                        categoryID: handbagCategory.id,
                        factoryID: coachFacroty.id,
                        country: 'Mỹ'
                    },
                    {
                        name: 'Handmade VLS 9007',
                        price: 2650000,
                        quantity: 20,
                        image: 'enlarged-8.jpg',
                        description: 'Mẫu túi vintage độc đáo, tôn lên nét cá tính riêng cho người sử dụng, thích hợp cho những ai yêu thích phong cách retro.',
                        sold: 17,
                        target: 'Đi Phố',
                        weight: 0.55,
                        material: 'Da bò',
                        dimension: '34cm x 9cm x 26cm',
                        categoryID: handbagCategory.id,
                        factoryID: michaelFacroty.id,
                        country: 'Mỹ'
                    },
                    {
                        name: 'Handmade VLS 9008',
                        price: 2500000,
                        quantity: 35,
                        image: 'enlarged-9.jpg',
                        description: 'Túi đeo vai thời trang, kết hợp giữa da và vải, tạo nên sự hài hòa về kiểu dáng và độ bền.',
                        sold: 23,
                        target: 'Đi Làm',
                        weight: 0.48,
                        material: 'Da bò & vải',
                        dimension: '36cm x 9cm x 27cm',
                        categoryID: handbagCategory.id,
                        factoryID: junoFacroty.id,
                        country: 'Việt Nam'
                    },
                    {
                        name: 'Handmade VLS 9009',
                        price: 2700000,
                        quantity: 29,
                        image: 'enlarged-10.jpg',
                        description: 'Túi xách tay phong cách hiện đại, phù hợp cho cả đi làm và đi chơi cuối tuần.',
                        sold: 19,
                        target: 'Đi Làm',
                        weight: 0.5,
                        material: 'Da tổng hợp',
                        dimension: '35cm x 8cm x 26cm',
                        categoryID: handbagCategory.id,
                        factoryID: zaraFacroty.id,
                        country: 'Bồ Đào Nha'
                    },
                    {
                        name: 'Handmade VLS 9010',
                        price: 2600000,
                        quantity: 33,
                        image: 'enlarged-11.jpg',
                        description: 'Túi đeo chéo nhỏ nhắn, tiện lợi, thích hợp cho các bạn nữ yêu thích sự nhẹ nhàng.',
                        sold: 21,
                        target: 'Đi Phố',
                        weight: 0.43,
                        material: 'Da thật',
                        dimension: '30cm x 8cm x 25cm',
                        categoryID: handbagCategory.id,
                        factoryID: charlesFacroty.id,
                        country: 'Singapore'
                    },
                    {
                        name: 'Handmade VLS 9011',
                        price: 2400000,
                        quantity: 26,
                        image: 'enlarged-12.jpg',
                        description: 'Túi clutch sang trọng, phù hợp cho những buổi tiệc đêm và sự kiện đặc biệt.',
                        sold: 18,
                        target: 'Dự Tiệc',
                        weight: 0.35,
                        material: 'Da bò',
                        dimension: '28cm x 6cm x 20cm',
                        categoryID: handbagCategory.id,
                        factoryID: pedroFacroty.id,
                        country: 'Singapore'
                    },
                    {
                        name: 'Handmade VLS 9012',
                        price: 2750000,
                        quantity: 23,
                        image: 'enlarged-13.jpg',
                        description: 'Túi du lịch tiện dụng, có nhiều ngăn để đồ, phù hợp cho những chuyến đi dài ngày.',
                        sold: 16,
                        target: 'Du Lịch',
                        weight: 0.65,
                        material: 'Da thật',
                        dimension: '42cm x 12cm x 32cm',
                        categoryID: handbagCategory.id,
                        factoryID: furlaFacroty.id,
                        country: 'Ý'
                    },
                    {
                        name: 'Handmade VLS 9013',
                        price: 2550000,
                        quantity: 31,
                        image: 'enlarged-14.jpg',
                        description: 'Túi xách tay phong cách cổ điển, chất liệu da mềm mại, phù hợp cho mọi dịp.',
                        sold: 22,
                        target: 'Đi Làm',
                        weight: 0.5,
                        material: 'Da bò',
                        dimension: '37cm x 10cm x 28cm',
                        categoryID: handbagCategory.id,
                        factoryID: leminoFacroty.id,
                        country: 'Nhật'
                    },
                    {
                        name: 'Handmade VLS 9014',
                        price: 2600000,
                        quantity: 28,
                        image: 'enlarged-15.jpg',
                        description: 'Túi đeo vai đa năng, phù hợp cho các bạn trẻ năng động và thích khám phá.',
                        sold: 19,
                        target: 'Đi Phố',
                        weight: 0.47,
                        material: 'Da tổng hợp',
                        dimension: '34cm x 9cm x 26cm',
                        categoryID: handbagCategory.id,
                        factoryID: handbagCategory.id,
                        country: 'Đài Loan'
                    },
                    {
                        name: 'Handmade VLS 9015',
                        price: 2450000,
                        quantity: 24,
                        image: 'enlarged-16.jpg',
                        description: 'Túi tote thời trang, phong cách trẻ trung, phù hợp để đi học và đi làm.',
                        sold: 20,
                        target: 'Đi Học',
                        weight: 0.52,
                        material: 'Da thật',
                        dimension: '36cm x 10cm x 28cm',
                        categoryID: handbagCategory.id,
                        factoryID: trousersCategory.id,
                        country: 'Trung Quốc'
                    },
                    {
                        name: 'Handmade VLS 9016',
                        price: 2700000,
                        quantity: 27,
                        image: 'enlarged-17.jpg',
                        description: 'Túi đeo chéo thể thao, phong cách năng động, phù hợp cho các hoạt động ngoài trời.',
                        sold: 17,
                        target: 'Du Lịch',
                        weight: 0.5,
                        material: 'Da tổng hợp',
                        dimension: '33cm x 9cm x 27cm',
                        categoryID: handbagCategory.id,
                        factoryID: shirtCategory.id,
                        country: 'Hàn Quốc'
                    },
                    {
                        name: 'Handmade VLS 9017',
                        price: 2650000,
                        quantity: 22,
                        image: 'enlarged-18.jpg',
                        description: 'Túi xách tay sang trọng, thiết kế tinh tế, phù hợp cho các dịp quan trọng.',
                        sold: 23,
                        target: 'Dự Tiệc',
                        weight: 0.55,
                        material: 'Da bò',
                        dimension: '37cm x 10cm x 29cm',
                        categoryID: handbagCategory.id,
                        factoryID: mlbkFacroty.id,
                        country: 'Thái Lan'
                    },
                    {
                        name: 'Handmade VLS 9018',
                        price: 2500000,
                        quantity: 29,
                        image: 'enlarged-19.jpg',
                        description: 'Túi đeo vai thời trang, thiết kế đơn giản nhưng sang trọng, dễ phối đồ.',
                        sold: 21,
                        target: 'Đi Làm',
                        weight: 0.48,
                        material: 'Da bò & vải',
                        dimension: '35cm x 9cm x 27cm',
                        categoryID: handbagCategory.id,
                        factoryID: diorFacroty.id,
                        country: 'Pháp'
                    },
                    {
                        name: 'Handmade VLS 9019',
                        price: 2600000,
                        quantity: 30,
                        image: 'enlarged-20.jpg',
                        description: 'Túi đeo chéo tiện dụng, kiểu dáng hiện đại, phù hợp cho các bạn trẻ năng động.',
                        sold: 18,
                        target: 'Đi Phố',
                        weight: 0.46,
                        material: 'Da thật',
                        dimension: '32cm x 8cm x 25cm',
                        categoryID: handbagCategory.id,
                        factoryID: gucciFacroty.id,
                        country: 'Ý'
                    }
                ]
            })
        }
    }
    if (countUser === 0) {
        const adminRole = await prisma.role.findFirst({
            where: {
                name: 'ADMIN'
            }
        })
        const userRole = await prisma.role.findFirst({
            where: {
                name: 'USER'
            }
        })
        if (adminRole && userRole) {
            await prisma.user.createMany({
                data: [
                    {
                        username: 'Admin',
                        email: 'admin@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: 'admin.png',
                        roleID: adminRole.id
                    },
                    {
                        username: 'User',
                        email: 'user@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: 'user.png',
                        roleID: userRole.id
                    },
                    {
                        username: 'Hoàng Linh Nhi',
                        email: 'nekkochan2k@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: 'admin-girl.png',
                        roleID: adminRole.id
                    }
                ]
            });
        }
    }
    if (countRole !== 0 && countUser !== 0 && countFactory !== 0 && countCategory !== 0 && countProduct) {
        console.log('Already Create Data...');
    }

}

export default createDatabase;