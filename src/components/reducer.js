export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    spotify: null,
    top_artists: null,
    item: null,
    token: 'BQBMiPRgwAmDYa7g7KSclckbZpU7eAXC3lHdH6DbtukqIULQ4tYHrT5bCOsbTMd2PbHaHQwbpz0fMLUhP6VF0w-ACEhD1W0QQFsEemP7R4HT8JpjjJsqwHOEbf-YjxIlcUdnR0-1vR5J7Ja6UTTlwtOLm_BTTpdNRDB4m7aNro2Fmcih',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        default:
            return state;
    }
};
export default reducer;
