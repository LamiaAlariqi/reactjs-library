export const sliders = [
    {
        src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1600&h=600",
        title: "Experience the magic of cinema.",
    },
    {
        src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1600&h=600",
        title: "From timeless classics to modern blockbusters.",
    },
    {
        src: "https://images.unsplash.com/photo-1517604931442-710e8b052ea1?auto=format&fit=crop&q=80&w=1600&h=600",
        title: "Your ultimate destination for movie entertainment."
    }
]

export const movies = [
    {
        id: 1,
        rating: 5,
        title: "The Shawshank Redemption",
        author: "Frank Darabont",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 2,
        rating: 4,
        title: "Superbad",
        author: "Greg Mottola",
        image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry."
    },
    {
        id: 3,
        rating: 5,
        title: "Spirited Away",
        author: "Hayao Miyazaki",
        image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
    },
    {
        id: 4,
        rating: 5,
        title: "The Shining",
        author: "Stanley Kubrick",
        image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from past and future."
    },
    {
        id: 5,
        rating: 4,
        title: "La La Land",
        author: "Damien Chazelle",
        image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future."
    },
    {
        id: 6,
        rating: 5,
        title: "Pulp Fiction",
        author: "Quentin Tarantino",
        image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&q=80&w=800&h=1200",
        desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
    }
];

export const movieCategories = [
    {
        id: 1,
        title: "Comedy Hits",
        books: [
            {
                id: 101,
                rating: 4,
                title: "Superbad",
                author: "Greg Mottola",
                image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 102,
                rating: 5,
                title: "The Hangover",
                author: "Todd Phillips",
                image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 103,
                rating: 4,
                title: "Bridesmaids",
                author: "Paul Feig",
                image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 104,
                rating: 4,
                title: "Step Brothers",
                author: "Adam McKay",
                image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&q=80&w=800&h=1200"
            }
        ]
    },
    {
        id: 2,
        title: "Animation Studio",
        books: [
            {
                id: 201,
                title: "Spirited Away",
                author: "Hayao Miyazaki",
                image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 202,
                title: "Toy Story",
                author: "John Lasseter",
                image: "https://m.media-amazon.com/images/M/MV5BNzljZTk5ZDgtZTQ1Zi00NTM4LThlOGUtZDk2MGM4NDQ4NWQyXkEyXkFqcGc@._V1_.jpg"
            },
            {
                id: 203,
                title: "The Lion King",
                author: "Roger Allers",
                image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg"
            },
            {
                id: 204,
                title: "Spider-Verse",
                author: "Bob Persichetti",
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800&h=1200"
            }
        ]
    },
    {
        id: 3,
        title: "Chilling Horror",
        books: [
            {
                id: 301,
                title: "The Shining",
                author: "Stanley Kubrick",
                image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 302,
                title: "Get Out",
                author: "Jordan Peele",
                image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 303,
                title: "Hereditary",
                author: "Ari Aster",
                price: '40$',
                image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 304,
                title: "Halloween",
                author: "John Carpenter",
                price: '40$',
                image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=800&h=1200"
            }
        ]
    },
    {
        id: 4,
        title: "Timeless Romance",
        books: [
            {
                id: 401,
                title: "The Notebook",
                author: "Nick Cassavetes",
                price: '40$',
                image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 402,
                title: "La La Land",
                author: "Damien Chazelle",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 403,
                title: "Pride & Prejudice",
                author: "Joe Wright",
                price: '100$',
                image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&q=80&w=800&h=1200"
            },
            {
                id: 404,
                title: "Titanic",
                author: "James Cameron",
                image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&q=80&w=800&h=1200"
            }
        ]
    }
];

export const teamMembers = [
    {
        id: 1,
        name: "James Cameron",
        role: "Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 2,
        name: "Steven Spielberg",
        role: "Producer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 3,
        name: "Christopher Nolan",
        role: "Screenwriter",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        id: 4,
        name: "Quentin Tarantino",
        role: "Cinematographer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
    }
];