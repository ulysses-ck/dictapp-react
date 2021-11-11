import React from "react";
import "./Definitions.css";
import { DefinitionDiv, HrStyled } from "./DefinitionStyles";

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
            ) : (
                meanings.map((item) =>
                    item.meanings.map((mean) =>
                        mean.definitions.map((def, index) => (
                            <DefinitionDiv
                                className="singleMean waves-effect waves-light btn-large"
                                LightMode={LightMode}
                            >
                                <b>
                                    {`${index + 1}. `}
                                    {def.definition[0].toUpperCase() +
                                        def.definition.slice(1)}
                                </b>
                                <HrStyled as="hr" />
                                {def.example && (
                                    <span>
                                        {def.example[0].toUpperCase() +
                                            def.example.slice(1) +
                                            "."}
                                    </span>
                                )}
                                <br />
                                {def.synonyms && (
                                    <i>{def.synonyms.map((s) => `${s}, `)}</i>
                                )}
                            </DefinitionDiv>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;
