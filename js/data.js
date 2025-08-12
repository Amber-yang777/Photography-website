// Photography Portfolio Data
const galleryData = [
    // Landscape Photography
    {
        id: 1,
        title: '山峦日落',
        description: '壮丽的山峰在夕阳西下时展现出金色的轮廓，云雾缭绕，景色如画。',
        category: 'landscape',
        image: 'https://images.pexels.com/photos/3061014/pexels-photo-3061014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Mountain sunset landscape photography'
    },
    {
        id: 2,
        title: '金色山脉',
        description: '阳光穿透云层，为雄伟的山脉披上了一层金辉，展现大自然的磅礴气势。',
        category: 'landscape',
        image: 'https://negativespace.co/wp-content/uploads/2019/04/negative-space-golden-mountain-sunset-sky-clouds-light.jpg',
        alt: 'Golden mountain landscape at sunset'
    },
    {
        id: 3,
        title: '宁静湖泊',
        description: '平静的湖面如镜子般倒映着天空和远山，营造出宁静致远的意境。',
        category: 'landscape',
        image: 'https://images.pexels.com/photos/2131969/pexels-photo-2131969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Peaceful lake landscape reflection'
    },
    {
        id: 4,
        title: '晨雾山谷',
        description: '晨雾弥漫的山谷，阳光透过薄雾洒向大地，如梦似幻的自然美景。',
        category: 'landscape',
        image: 'https://cdn.pixabay.com/photo/2020/09/01/21/03/sunset-5536777_960_720.jpg',
        alt: 'Misty valley landscape in morning light'
    },

    // Portrait Photography
    {
        id: 5,
        title: '优雅人像',
        description: '黑白人像摄影，捕捉模特优雅的神态和完美的光影效果。',
        category: 'portrait',
        image: 'https://get.pxhere.com/photo/person-black-and-white-woman-hair-white-photography-vintage-hollywood-singer-portrait-model-fashion-black-monochrome-lady-hairstyle-pictures-long-hair-black-hair-beauty-cinema-movies-actress-photo-shoot-monochrome-photography-portrait-photography-art-model-supermodel-motion-pictures-jean-simmons-952513.jpg',
        alt: 'Elegant black and white portrait photography'
    },
    {
        id: 6,
        title: '艺术肖像',
        description: '充满艺术感的人像作品，光影交错，展现人物的内在魅力和情感深度。',
        category: 'portrait',
        image: 'https://www.viewbug.com/media/mediafiles/2015/11/03/60095595_large1300.jpg',
        alt: 'Artistic portrait with dramatic lighting'
    },
    {
        id: 7,
        title: '时尚写真',
        description: '时尚感十足的人像摄影，完美的构图和光线营造出独特的视觉效果。',
        category: 'portrait',
        image: 'https://www.viewbug.com/media/mediafiles/2015/09/29/59035157_large.jpg',
        alt: 'Fashion portrait photography'
    },
    {
        id: 8,
        title: '经典黑白',
        description: '经典的黑白人像摄影，突出人物的表情和神韵，具有永恒的艺术价值。',
        category: 'portrait',
        image: 'https://www.viewbug.com/media/mediafiles/2016/04/08/65322170_large.jpg',
        alt: 'Classic black and white portrait'
    },

    // Street Photography
    {
        id: 9,
        title: '城市漫步',
        description: '街头摄影捕捉都市生活的真实瞬间，展现现代城市的节奏和活力。',
        category: 'street',
        image: 'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Urban street photography capturing city life'
    },
    {
        id: 10,
        title: '街头印象',
        description: '记录街头的人文风情，每一个瞬间都诉说着城市的故事。',
        category: 'street',
        image: 'https://photographylife.com/wp-content/uploads/2019/02/Plaid.jpg',
        alt: 'Street photography documenting urban culture'
    },
    {
        id: 11,
        title: '都市节拍',
        description: '捕捉都市生活的节奏感，人们匆忙的脚步和城市的脉搏。',
        category: 'street',
        image: 'https://photographylife.com/wp-content/uploads/2019/02/Boots-In-Step.jpg',
        alt: 'Urban rhythm street photography'
    },
    {
        id: 12,
        title: '街角光影',
        description: '利用街头的自然光影，创造富有戏剧性的视觉效果。',
        category: 'street',
        image: 'https://independent-photo.com/wp-content/uploads/2019/01/Man-And-Dog-1980-Jamel-Shabazz-1791x1200.jpg',
        alt: 'Street corner light and shadow photography'
    },

    // Architecture Photography
    {
        id: 13,
        title: '几何建筑',
        description: '现代建筑的几何美学，线条简洁流畅，展现建筑的艺术魅力。',
        category: 'architecture',
        image: 'https://negativespace.co/wp-content/uploads/2018/12/negative-space-geometric-glass-city-architecture.jpg',
        alt: 'Geometric glass building architecture'
    },
    {
        id: 14,
        title: '现代立面',
        description: '建筑摄影展现现代建筑立面的设计美感，玻璃与钢铁的完美结合。',
        category: 'architecture',
        image: 'https://get.pxhere.com/photo/architecture-structure-building-geometric-landmark-facade-professional-lighting-modern-office-building-tourist-attraction-dortmund-headquarters-brutalist-architecture-841164.jpg',
        alt: 'Modern building facade architecture photography'
    },
    {
        id: 15,
        title: '抽象建筑',
        description: '从独特的角度拍摄建筑细节，创造出抽象艺术般的视觉效果。',
        category: 'architecture',
        image: 'https://img.andrewprokos.com/ARCHISTRACTS-HIGH-LINE-FACADE-3379-1000PX-375x500.jpg',
        alt: 'Abstract architectural photography detail'
    },
    {
        id: 16,
        title: '蓝天建筑',
        description: '现代建筑与蓝天的完美结合，展现建筑在自然光下的壮丽姿态。',
        category: 'architecture',
        image: 'https://4kwallpapers.com/images/wallpapers/modern-architecture-building-office-geometric-blue-2880x1800-6640.jpg',
        alt: 'Modern architecture against blue sky'
    },

    // Nature & Wildlife Photography
    {
        id: 17,
        title: '森林鹿群',
        description: '宁静的森林中，鹿群在溪边饮水的温馨场景，展现人与自然的和谐。',
        category: 'nature',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/043/548/407/small/deer-drinking-water-in-river-in-forest-serene-wildlife-landscape-photo.jpg',
        alt: 'Deer drinking water in forest nature photography'
    },
    {
        id: 18,
        title: '野生豹崽',
        description: '两只可爱的小豹子在原木上休憩，野性与温柔并存的美丽瞬间。',
        category: 'nature',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/049/857/243/small_2x/two-baby-leopards-sitting-on-a-log-in-the-woods-photo.jpg',
        alt: 'Baby leopards in the wild nature photography'
    },
    {
        id: 19,
        title: '森林獾',
        description: '欧洲獾在秋季森林中的自然状态，展现野生动物的生存智慧。',
        category: 'nature',
        image: 'https://thumbs.dreamstime.com/b/badger-forest-animal-nature-habitat-germany-wildlife-scene-wild-badger-meles-meles-animal-wood-european-badger-autumn-europe-102076850.jpg',
        alt: 'European badger in autumn forest'
    },
    {
        id: 20,
        title: '棕熊觅食',
        description: '强壮的棕熊在森林中觅食的自然场景，野性与力量的完美体现。',
        category: 'nature',
        image: 'https://thumbs.dreamstime.com/b/bear-nature-wildlife-brown-bear-forest-meeting-bear-big-bear-animal-nature-65364815.jpg',
        alt: 'Brown bear foraging in forest wildlife'
    },
    {
        id: 21,
        title: '可爱浣熊',
        description: '机灵的浣熊在自然环境中的生动表现，展现小动物的灵性和可爱。',
        category: 'nature',
        image: 'https://cdn.pixabay.com/photo/2019/08/01/12/19/raccoon-4377383_1280.jpg',
        alt: 'Cute raccoon in natural habitat'
    },

    // Additional Landscape Photos
    {
        id: 22,
        title: '火山日落',
        description: '火山轮廓在夕阳下呈现出戏剧性的轮廓，大自然的壮丽力量。',
        category: 'landscape',
        image: 'https://static.vecteezy.com/system/resources/previews/049/855/894/non_2x/stunning-high-resolution-nature-and-landscape-backgrounds-breathtaking-scenery-in-hd-free-photo.jpg',
        alt: 'Volcanic landscape at sunset'
    },
    {
        id: 23,
        title: '山峦晚霞',
        description: '晚霞映照下的山脉呈现出温暖的色调，如诗如画的自然美景。',
        category: 'landscape',
        image: 'https://thumbs.dreamstime.com/b/beautiful-sunset-over-majestic-mountain-range-perfect-nature-landscape-backgrounds-361256503.jpg',
        alt: 'Mountain range with beautiful sunset colors'
    },

    // Additional Architecture
    {
        id: 24,
        title: '玻璃反射',
        description: '现代建筑玻璃幕墙的光影反射，创造出迷人的视觉效果。',
        category: 'architecture',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/051/129/221/small/close-up-of-modern-glass-building-facade-with-geometric-patterns-reflecting-sky-contemporary-architectural-design-photo.jpg',
        alt: 'Modern glass building facade reflection'
    },
    {
        id: 25,
        title: '混凝土纹理',
        description: '现代混凝土建筑的纹理和几何图案，展现材料的质感美。',
        category: 'architecture',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/050/501/574/small/grey-cement-wall-geometric-modern-texture-concrete-architecture-with-shadow-light-photo.JPG',
        alt: 'Concrete architecture texture and patterns'
    },

    // Additional Nature
    {
        id: 26,
        title: '森林小径',
        description: '阳光透过树叶洒在蜿蜒的森林小径上，充满诗意的自然场景。',
        category: 'nature',
        image: 'https://get.pxhere.com/photo/tree-forest-branch-animal-wildlife-jungle-natural-mammal-fox-fauna-rainforest-vertebrate-proboscis-monkey-woodland-115604.jpg',
        alt: 'Forest path with dappled sunlight'
    },

    // Additional Street Photography
    {
        id: 27,
        title: '城市倒影',
        description: '雨后街头的倒影，城市灯光在湿润路面上创造出梦幻的效果。',
        category: 'street',
        image: 'https://streetphotographymagazine.com/wp-content/uploads/2016/10/Como-perder-el-miedo-en-Street-Photography.jpg',
        alt: 'City reflections on wet street after rain'
    },

    // Additional Portrait
    {
        id: 28,
        title: '商务肖像',
        description: '专业的商务人像摄影，展现现代职场女性的自信与魅力。',
        category: 'portrait',
        image: 'https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg',
        alt: 'Professional business woman portrait'
    }
];

// Categories configuration
const categories = {
    all: {
        name: '全部',
        icon: 'fas fa-th'
    },
    landscape: {
        name: '风景',
        icon: 'fas fa-mountain'
    },
    portrait: {
        name: '人像',
        icon: 'fas fa-user-circle'
    },
    street: {
        name: '街拍',
        icon: 'fas fa-road'
    },
    architecture: {
        name: '建筑',
        icon: 'fas fa-building'
    },
    nature: {
        name: '自然',
        icon: 'fas fa-leaf'
    }
};

// Statistics
const portfolioStats = {
    totalPhotos: galleryData.length,
    categories: Object.keys(categories).length - 1, // Exclude 'all'
    quality: 'HD'
};

// Export data for use in main.js
window.galleryData = galleryData;
window.categories = categories;
window.portfolioStats = portfolioStats;