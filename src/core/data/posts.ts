const posts = [
    {
        id: 1,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 2,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 3,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 4,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 5,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 6,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 7,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 8,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 9,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 10,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 11,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 12,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 13,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 14,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 15,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 16,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 17,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 18,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
    {
        id: 19,
        date: '27 may 2022',
        title: '15 Disadvantages Of Freedom And How You Can Workaround It',
        author: '@samurai2099',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        tags: ['#meditation', '#mentalpeace']
    },
    {
        id: 20,
        date: '24 may 2022',
        title: 'The Death Of Freedom',
        author: '@samurai2099',
        body: 'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. ...read more',
        tags: ['#anarchy', '#silence']
    },
]

export default posts;