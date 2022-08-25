import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sections: ['Усі відео', 'Документи', 'Теми', 'Автоматизація', 'Рубрики', 'Особистий консультант'],
        categories: [
            {
                title: 'відео', context: [
                    {theme: 'all_videos', title: 'Усі відео', data: [], isActive: true},
                    {theme: 'business_trips', title: 'Відрядження', data: [], isActive: false},
                    {theme: 'currency', title: 'Гроші', data: [], isActive: false},
                    {theme: 'production', title: 'Виробництва', data: [], isActive: false},
                    {theme: 'excise_tax', title: 'Акцизний податок', data: [], isActive: false},
                    {theme: 'vacation', title: 'Відпустка', data: [], isActive: false}
                ], isVideo: true, isRedirect: true
            },
            {title: 'КОНСУЛЬТАЦІЇ', context: [], isRedirect: true},
            {title: 'ДОКУМЕНТИ', context: [], isRedirect: false},
            {title: 'ТЕМИ', context: [], isRedirect: true},
            {title: 'Автоматизація', context: [], isRedirect: true},
            {title: 'Лектори', context: [], isRedirect: true},
            {title: 'Рубрики', context: [], isRedirect: true}
        ],
        pagination: [
            {num: 1, isActive: true},
            {num: 2, isActive: false},
            {num: 3, isActive: false},
            {num: '...', isActive: false},
            {num: 10, isActive: false},
        ],
        videos: [],
        defaultVideos: [],
        appearance: ''
    },
    getters: {
        getSections: state => state.sections,
        getCategories: state => state.categories,
        getPagination: state => state.pagination,
        getVideos: state => state.videos,
        getAppearance: state => state.appearance,
    },
    mutations: {
        setVideos: (state, payload) => state.videos = payload,
        setDefaultVideos: (state, payload) => state.defaultVideos = payload,
        setInitialAppearance: (state) => {
            if (localStorage.getItem('appearance-videos')) {
                state.appearance = localStorage.getItem('appearance-videos')
            } else {
                localStorage.setItem('appearance-videos', 'grid')
                state.appearance = 'grid'
            }
        },
        setChangeAppearance: (state, payload) => {
            localStorage.setItem('appearance-videos', payload)
            state.appearance = payload
        },
        setPagination: (state, payload) => state.pagination = payload,
        setSearchVideo: (state, payload) => {
            state.videos = state.defaultVideos.filter(el => el.title.toLowerCase().includes(payload.toLowerCase()))
        },
        setFilteredByThemesVideos: (state, payload) => {
            state.categories[0].context.forEach(el => el.data = payload.filter(item => item.theme === el.theme))
            state.categories[0].context[0].data = payload
        },
        setSelectedTheme: (state, payload) => state.videos = payload,
        setSelectedCategory: (state, payload) => state.categories[0].context = payload,
        setFilteredVideos: (state, payload) => {
            if (payload === 'Популярні') {
                state.videos = state.defaultVideos.filter(el => el.options.popular)
            } else if (payload === 'За рейтингом') {
                state.videos = state.defaultVideos.filter(el => el.options.sale)
            } else {
                state.videos = state.defaultVideos.filter(el => el.date.split('-')[1] === '07')
            }
        }
    },
    actions: {
        async fetchVideos(ctx) {
            const res = await fetch(
                'https://storage.7eminar.ua/content/test_task_front/data.json'
            )
            const videos = await res.json()
            ctx.commit('setVideos', videos)
            ctx.commit('setDefaultVideos', videos)
            ctx.commit('setFilteredByThemesVideos', videos)
        }
    }
});
