import React from "react";
import "./Definitions.css";
import {
    DefinitionDiv,
    HrStyled,
    ErrorDefinitionDiv,
} from "./DefinitionStyles";
import categories from "../../data/category";

const Definitions = ({ word, category, meanings, LightMode }) => {
    return (
        <div className="meanings">
            {meanings[0] && word && category === "en" && (
                <audio
                    src={
                        meanings[0].phonetics[0] &&
                        meanings[0].phonetics[0].audio
                    }
                    controls
                ></audio>
            )}

            {word === "" ? (
                <span className="subTitle">
                    Start by typing a word in search
                </span>
            ) : meanings.length === 0 ? (
                <ErrorDefinitionDiv LightMode={LightMode}>
                    Seems the word <b>"{word}"</b> does not exists in{" "}
                    <b>{`${
                        categories.filter((i) => i.label === category)[0].value
                    }[${category}]`}</b>
                </ErrorDefinitionDiv>
            ) : (
                meanings.map((item) => (
                    <DefinitionDiv className="singleMean" LightMode={LightMode}>
                        <h3>{item.word.toUpperCase()}</h3>
                        <p>{`/${item.phonetic}/`}</p>
                        {item.origin}

                        {item.meanings.map((mean) =>
                            mean.definitions.map((def, index) => (
                                <div>
                                    <ul
                                    >
                                        <li>
                                            <b>
                                                {def.definition[0].toUpperCase() +
                                                    def.definition.slice(1)}
                                            </b>
                                        </li>
                                        <HrStyled as="hr" />
                                        {def.example && (
                                            <span>
                                                {def.example[0].toUpperCase() +
                                                    def.example.slice(1) +
                                                    "."}
                                            </span>
                                        )}
                                        <br />
                                        {def.synonyms.length > 0 && (
                                            <i>
                                                {def.synonyms.map(
                                                    (s) => `${s}, `
                                                )}
                                            </i>
                                        )}
                                    </ul>
                                </div>
                            ))
                        )}
                    </DefinitionDiv>
                ))
            )}
        </div>
    );
};

export default Definitions;
