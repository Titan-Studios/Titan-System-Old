import { agents as userAgents } from './user-agents';

export const INFO = {
    version: '^3.0.0',
    stats: {
        modules: true,
        dashboard: false
    },
    devMode: true,
    devServer: '762354992757604373',
    devUsers: ['625487161092866107'],
    ids: {
        premiumServer: '708843719528284262',
        premiumRoles: [
            '741482855451983892',
            '737030803099484172',
            '739926480934666311',
            '701893680096608266'
        ]
    },
    links: {
        topgg: 'https://top.gg/bot/{id}',
        invite: 'https://discord.com/oauth2/authorize?&client_id={id}&scope=applications.commands+bot&permissions=66321471',
        server: 'https://discord.gg/R2YFteN',
        dashboard: 'https://bot.dstitan.codes/servers',
        premium: 'https://www.dstitan.codes/membership'
    },
    apis: {
        chatbot: 'https://api.monkedev.com/fun/chat?msg={msg}&uid={uid}&key={key}',
        lyrics: 'https://api.lyrics.ovh'
    },
    emojis:
    {
        check: '<:check:767183868297478204>',
        none: '<:none:767184140389974036>',
        buttonOn: '<:ButtonOn:875072702757634088>',
        buttonOff: '<:ButtonOff:875072702568865793>',
        buttonNull: '<:ButtonNull:875089385559851020>',
        uh: '<:uh:702531331497918496>',
        pawcoin: '<:pawcoin:833167370256252950>',
        pokerStar: '<:poker_star:843283579089321995>'
    },
    tags: { subreddit: ["memes", "pokemonmemes", "dankmemes", "furrymemes", "animemes"] },
    userAgents: userAgents
};

export const SERVERS = {
    MAIN: {
        ID: '708843719528284262',
        ROLES: {
            TITAN_FAN: { ID: '769118007552638997' },
            VERIFIED_MEMBER: { ID: '739111886234320896' },
            NEW_MEMBER: { ID: '760315425861926932' },
            TRIAL_MOD: { ID: '778324532712833044' },
            CATEGORIES: { IDS: ['880852923628789860', '880855152490328114', '880849661148155975', '880848528820273174'] },
            NOTIFICATIONS: { ANNOUNCEMENT: '718908778593910895', UPDATE: '751436356919492638', POSTS: '735845087103156334', EVENT: '746025237359100047', GIVEAWAY: '718909015333142540' },
            PRONOUNS_AND_SPECIES: { HE_HIM: '717398381462290504', SHE_HER: '717398413586595902', THEY_THEM: '717398443454365756', ANY_ALL: '851944848533356564', HOOMAN: '851945299198214154', POKEMON: '851945246332813352', FURRY: '717397977177784430', SCALIE: '851944475407941634' },
            OCCUPATION: { ARTIST: '717398102507651132', STREAMER: '745509780428292117', YOUTUBER: '745509958245941268', DEVELOPER: '745510441723101194', GAMER: '745510721814790215' },
            COLORS: { RED: '753662588503719988', GREEN: '753662704622764072', BLUE: '753662810902495403', YELLOW: '753662886710345770', ORANGE: '753663000220663910', PINK: '753663064536121455', PURPLE: '753663132232319019', SHADOW: '753663417318899802', MILK: '753663412344586251', BLURPLE: '753664783298986025' },
            COLORS_PLUS: { PASTAL_RED: '753663188079345766', PASTAL_GREEN: '753663353406226474', PASTAL_BLUE: '753663363678208163', PASTAL_YELLOW: '753663396532191324', PASTAL_ORANGE: '753663400361328682', PASTAL_PINK: '753663404887244820', PASTAL_PURPLE: '753663408993468477', TITAN_FUR: '851972995017736222', TITAN_PURPLE: '851972431135637524', TITAN_GREEN: '851972593346674709', BLURPLE20: '851971391645417482' },
            PREMIUM: { CANDY_CANE: '762853490934153238', XEON: '762854019848208384', JETT: '762853862511870012', STRAWBERRY_MILK: '762852859187429386', DAZZLE: '762854280373469214', PANCAKE: '762857859922395176', WAFFLE: '762858725685461023', MEAT: '762858868710703134', PIZZA: '762858951158267914', TACO: '762859207296155689', DOUGHNUT: '762859405498646588', COOKIE: '762859675208646677', CAKE: '762859756741328897', ICECREAM: '762859844687757342', GIVE_ME_TITAN: '772704021832138762', PROUD_SIMP: '762855457324138527', LOVE_PETS: '762855681346502706', LIL_BEAN: '762855926654173214', NOT_CUTE: '762856413634363412', FWUFFY_BABY: '762856152622432297', }
        },
        CHANNELS: {
            MAIN_CHAT: { ID: '738057618215403570' },
            ROLES: { ID: '716635158228369470' },
            TERMS: { ID: '716634466399027200' },
            INBOX: { ID: '716634956587073536' },
        }
    }, STAFF: {
        ID: '761296265312206850',
        ROLES: {},
        CHANNELS: {
            APPLICATIONS: { ID: '885240339345055745' },
            TICKETS: { ID: '941826428813606922' }
        }
    }, PREMIUM: {
        ID: '786246951757938778',
        ROLES: {},
        CHANNELS: {
            MEMBERS: { ID: '942612252106838066' },
            POSTS: { ID: '941911557393240115' }
        }
    }
};

export const CLIENT = {
    partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
    intents: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384]
};

export const ENV = {
    CLIENT: {
        ENCRYPTION: process.env.ENCRYPTION_SECRET,
        SECRET: INFO.devMode ? process.env.CLIENT_AUTH_SECRET : process.env.CLIENT_SECRET,
        TOKEN: INFO.devMode ? process.env.CLIENT_AUTH_TOKEN : process.env.CLIENT_TOKEN,
        ID: process.env.CLIENT_ID
    },
    DATABASE: {
        POOL_SIZE: process.env.DB_CONNECTION_POOL_SIZE,
        BOT: {
            NAME: process.env.DB_DATABASE,
            CONNECTION_STRING: process.env.DB_CONNECTION_STRING
        }
    },
    EXPRESS: {
        MAIN_DOMAIN: process.env.WEBSITE_URL,
        DASHBOARD_DOMAIN: process.env.DASHBOARD_URL,
        DASHBOARD_CALLBACK: process.env.DASHBOARD_CALLBACK,
        PORT: process.env.PORT
    },
    API: {
        DISCORD: process.env.DISCORD_API,
        MONKEDEV_KEY: process.env.API_MONKEDEV_KEY
    }
};

export const GIVEAWAY = {};

export const DISTUBE = {};