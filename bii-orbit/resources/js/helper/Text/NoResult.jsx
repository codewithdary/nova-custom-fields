import React from "react";

export default function NoResult({ text }) {
    return (
        <div className="pt-6">
            <h3 className="no__results">
                {text}
            </h3>
        </div>
    )
}
