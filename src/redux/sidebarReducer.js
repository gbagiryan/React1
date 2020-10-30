let initialState = {
    friends: [
        {
            id: 1,
            avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
            name: 'John'
        },
        {
            id: 2,
            avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
            name: 'Alice'
        },
        {
            id: 3,
            avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
            name: 'Kevin'
        },
        {
            id: 4,
            avatar: 'https://i.pinimg.com/originals/66/4b/74/664b743d359a8c15652911fed69b7752.jpg',
            name: 'James'
        }]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
};

export default sidebarReducer;