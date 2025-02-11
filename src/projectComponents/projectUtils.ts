export const ALL_TECH = "All";

export const INITIAL_PROJECT_STATE = {
    id: "",
    title: "",
    description: "",
    technologies: [],
    link: "",
    imageUrl: "",
};

const URL_PATTERN = new RegExp(
    "^(https?:\\/\\/)" +
    "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" +
    "((\\d{1,3}\\.){3}\\d{1,3}))" +
    "(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*" +
    "(\\?[;&a-zA-Z\\d%_.~+=-]*)?" +
    "(\\#[-a-zA-Z\\d_]*)?$",
    "i"
);

export const validateUrl = (url: string): boolean => URL_PATTERN.test(url);
