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
                    style={{ alignSelf: "center" }}
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
                    } [${category}]`}</b>
                </ErrorDefinitionDiv>
            ) : (
                meanings.map((item) => (
                    <DefinitionDiv className="singleMean" LightMode={LightMode}>
                        <h3>{item.word.toUpperCase()}</h3>
                        {item.phonetic ? <p>{`/${item.phonetic}/`}</p> : ""}
                        {item.origin ? (
                            <p>
                                [Origin] <b>{item.origin}</b>
                            </p>
                        ) : (
                            ""
                        )}
                        <HrStyled as="hr" />

                        {item.meanings.map((mean) => (
                            <div>
                                <ol>
                                    {mean.partOfSpeech ? (
                                        <li>{`${mean.partOfSpeech}`}</li>
                                    ) : (
                                        ""
                                    )}
                                    {mean.definitions.map((def, index) => (
                                        <ul>
                                            <li>
                                                <b>
                                                    {def.definition[0].toUpperCase() +
                                                        def.definition.slice(1)}
                                                </b>
                                                <p>
                                                    {def.example && (
                                                        <span>
                                                            "
                                                            {def.example[0].toUpperCase() +
                                                                def.example.slice(
                                                                    1
                                                                ) +
                                                                "."}
                                                            "
                                                        </span>
                                                    )}
                                                </p>
                                                <p>
                                                    {def.synonyms.length >
                                                        0 && (
                                                        <i>
                                                            Synonyms:{" "}
                                                            {def.synonyms.map(
                                                                (s) => `${s}, `
                                                            )}
                                                        </i>
                                                    )}
                                                </p>
                                                <p>
                                                    {def.antonyms.length >
                                                        0 && (
                                                        <i>
                                                            Antonyms:{" "}
                                                            {def.antonyms.map(
                                                                (s) => `${s}, `
                                                            )}
                                                        </i>
                                                    )}
                                                </p>
                                            </li>
                                            <br />
                                        </ul>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </DefinitionDiv>
                ))
            )}
        </div>
    );
};

export default Definitions;
