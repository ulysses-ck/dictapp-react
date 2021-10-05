import {
    createTheme,
    MenuItem,
    TextField,
    ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord, LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#fff" : "#000",
            },
            type: LightMode ? "dark" : "light",
        },
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    };

    return (
        <div className="header">
            <span className="title">{word ? word : "DictApp"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        className="select"
                        id="standard-select-currency"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        helperText="Please select a language"
                    >
                        {categories.map((option) => {
                            return (
                                <MenuItem
                                    key={option.label}
                                    value={option.label}
                                >
                                    {option.value}
                                </MenuItem>
                            );
                        })}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
