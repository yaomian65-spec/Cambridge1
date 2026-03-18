const avatars = [
    { id: 'av1', title: 'Fire Dragon', cnTitle: '火龙', src: '../img/dragon.png' },
    { id: 'av2', title: 'Ice Mouse', cnTitle: '冰鼠', src: '../img/mouse.png' },
    { id: 'av3', title: 'Smart Rabbit', cnTitle: '聪兔', src: '../img/rabbit.png' },
    { id: 'av4', title: 'Iron Robot', cnTitle: '铁机', src: '../img/robot.png' },
    { id: 'av5', title: 'Fast Cheetah', cnTitle: '快豹', src: '../img/cheetah.png' },
    { id: 'av6', title: 'Stone Golem', cnTitle: '石人', src: '../img/golem.png' },
    { id: 'av7', title: 'Sky Eagle', cnTitle: '天鹰', src: '../img/eagle.png' },
    { id: 'av8', title: 'Loud Parrot', cnTitle: '响鹦', src: '../img/parrot.png' },
    { id: 'av9', title: 'Super Star', cnTitle: '超星', src: '../img/star.png' }
];

// 将对应的音频路径直接注入词汇数据库
const cardDatabase = [
    { id: 'card10', title: '球', enDesc: 'Ball', imgSrc: '../img/ball.png', audioSrc: '../audio/ball.MP3' },
    { id: 'card11', title: '洋娃娃', enDesc: 'Doll', imgSrc: '../img/doll.png', audioSrc: '../audio/doll.MP3' },
    { id: 'card12', title: '风筝', enDesc: 'Kite', imgSrc: '../img/kite.png', audioSrc: '../audio/kite.MP3' },
    { id: 'card15', title: '机器人', enDesc: 'Robot', imgSrc: '../img/robot2.png', audioSrc: '../audio/robot.MP3' },
    { id: 'card16', title: '桌子', enDesc: 'Table', imgSrc: '../img/table.png', audioSrc: '../audio/table.MP3' },
    { id: 'card17', title: '箱子', enDesc: 'Box', imgSrc: '../img/box.png', audioSrc: '../audio/box.MP3' },
    { id: 'card18', title: '床', enDesc: 'Bed', imgSrc: '../img/bed.png', audioSrc: '../audio/bed.MP3' },
    { id: 'card19', title: '单人椅', enDesc: 'Chair', imgSrc: '../img/chair.png', audioSrc: '../audio/chair.MP3' },
    { id: 'card20', title: '橱柜', enDesc: 'Cupboard', imgSrc: '../img/cupboard.png', audioSrc: '../audio/cupboard.MP3' }
];

const modulesDef = [
    {
        id: 'listening', name: '听力', enName: 'Listening', icon: '🎧',
        rewards: [
            { img: '../img/headset.png', cn: '侦察耳机', en: 'Scout Headset' },
            { img: '../img/shell.png', cn: '精灵海螺', en: 'Elf Shell' },
            { img: '../img/crystal.png', cn: '巨龙水晶', en: 'Dragon Crystal' }
        ]
    },
    {
        id: 'speaking', name: '口语', enName: 'Speaking', icon: '🗣️',
        rewards: [
            { img: '../img/megaphone.png', cn: '勇气喇叭', en: 'Brave Megaphone' },
            { img: '../img/mic.png', cn: '魔法话筒', en: 'Magic Mic' },
            { img: '../img/badge.png', cn: '狮王勋章', en: 'Lion Badge' }
        ]
    },
    {
        id: 'vocab', name: '词汇', enName: 'Vocabulary', icon: '📖',
        rewards: [
            { img: '../img/ring.png', cn: '记忆指环', en: 'Bronze Ring' },
            { img: '../img/lantern.png', cn: '智慧提灯', en: 'Owl Lantern' },
            { img: '../img/tome.png', cn: '全知魔典', en: 'Magic Tome' }
        ]
    },
    {
        id: 'sentence', name: '造句', enName: 'Sentence', icon: '💬',
        rewards: [
            { img: '../img/gear.png', cn: '逻辑齿轮', en: 'Logic Gear' },
            { img: '../img/chain.png', cn: '拼图锁链', en: 'Puzzle Chain' },
            { img: '../img/wand.png', cn: '时空魔杖', en: 'Time Wand' }
        ]
    },
    {
        id: 'homework', name: '作业', enName: 'Homework', icon: '🏆',
        rewards: [
            { img: '../img/shield.png', cn: '坚韧盾牌', en: 'Iron Shield' },
            { img: '../img/cape.png', cn: '骑士披风', en: 'Silver Cape' },
            { img: '../img/crown.png', cn: '荣耀王冠', en: 'Glory Crown' }
        ]
    }
];

let appState = { heroes: [], activeHeroIndex: -1 };

function loadState() {
    const saved = localStorage.getItem('pixelHeroesMultiState');
    if (saved) appState = JSON.parse(saved);
}

function saveState() {
    localStorage.setItem('pixelHeroesMultiState', JSON.stringify(appState));
}

window.addEventListener('DOMContentLoaded', loadState);