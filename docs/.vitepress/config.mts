import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/note/',
    title: "Etwahl Note",
    description: "Etwahl的生存笔记",
    themeConfig: {
        nav: [
            {text: 'Java', link: '/java/'},
            {text: '前端', link: '/front/'},
            {text: '测试', link: '/test/'},
            {text: '运维', link: '/ops/'}
        ],
        sidebar: {
            '/java/': [
                {
                    text: 'Java',
                    items: []
                }
            ],
            '/front/': [
                {
                    text: '前端',
                    items: []
                }
            ],
            '/test/': [
                {
                    text: '测试',
                    items: []
                }
            ],
            '/ops/': [
                {
                    text: '运维',
                    items: []
                }
            ]
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/etwahl-rabbit/note'}
        ]
    }
})
