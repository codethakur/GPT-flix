import { getByPlaceholderText } from "@testing-library/react";

const language  = {
    en:{
        search: "Search",
        getSearchPlaceholder: "What would you like to watch Today?"
    },
    hin:{
        search: "Search",
        getSearchPlaceholder: "आज आप क्या देखना चाहेंगे?"
    },
    spanish:{
        search: "Search",
        getSearchPlaceholder: "¿Qué te gustaría ver hoy?"
    },
};

export default language;