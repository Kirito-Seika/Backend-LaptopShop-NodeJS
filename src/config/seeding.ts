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
                        name: 'Handmade VLS 9006',
                        price: 2500000,
                        quantity: 1000,
                        image: '',
                        description: 'Túi xách nữ cao cấp VLS 9006 là người bạn đồng hành lý tưởng từ những ngày làm việc bận rộn trong tuần đến những cuộc hẹn cuối tuần thú vị.',
                        sold: 25,
                        target: 'Du Lịch',
                        categoryID: handbagCategory.id,
                        factoryID: mlbkFacroty.id
                    },
                    {
                        name: 'Handmade VLS 9005',
                        price: 1400000,
                        quantity: 1000,
                        image: '',
                        description: 'Mang phong cách sang trọng và thời thượng, chiếc ví cầm tay da bò thật với họa tiết da trăn là sự lựa chọn hoàn hảo cho những ai yêu thích sự cá tính và đẳng cấp.',
                        sold: 25,
                        target: 'Du Lịch',
                        categoryID: handbagCategory.id,
                        factoryID: diorFacroty.id
                    },
                    {
                        name: 'Handmade VLS 9004',
                        price: 2500000,
                        quantity: 1000,
                        image: '',
                        description: 'Tối giản nhưng đầy tinh tế, chiếc ví cầm tay da bò màu đen đến từ Gento là điểm nhấn hoàn hảo cho phong cách thanh lịch hiện đại.',
                        sold: 25,
                        target: 'Du Lịch',
                        categoryID: handbagCategory.id,
                        factoryID: gucciFacroty.id
                    },
                    {
                        name: 'Handmade VLS 9003',
                        price: 1500000,
                        quantity: 1000,
                        image: '',
                        description: 'Túi đeo vai nữ da bò VLS903 được làm từ chất liệu da bò cao cấp. Từ những miếng da bò thô nhập khẩu từ Italy, qua quá trình thuộc da tỉ mỉ của những người thợ lành nghề.',
                        sold: 25,
                        target: 'Du Lịch',
                        categoryID: handbagCategory.id,
                        factoryID: chanelFacroty.id
                    },
                    {
                        name: 'Handmade VLS 9002',
                        price: 1500000,
                        quantity: 1000,
                        image: '',
                        description: 'Thiết kế của túi đeo chéo VLS-904 độc đáo với phom dáng hình hộp chữ nhật và bốn góc túi được bo mềm mại, tạo nên một tổng thể túi thanh lịch và sang trọng.',
                        sold: 25,
                        target: 'Du Lịch',
                        categoryID: handbagCategory.id,
                        factoryID: chanelFacroty.id
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
                        avatar: '',
                        roleID: adminRole.id
                    },
                    {
                        username: 'User',
                        email: 'user@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: '',
                        roleID: userRole.id
                    },
                    {
                        username: 'Hoàng Linh Nhi',
                        email: 'nekkochan2k@gmail.com',
                        password: defaultPassword,
                        address: 'Hà Nội',
                        phone: '0156241416',
                        accountType: ACCOUNT_TYPE.SYSTEM,
                        avatar: '',
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