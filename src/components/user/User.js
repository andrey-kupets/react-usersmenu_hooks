import React from "react";

export default function  RenderUser(props) {
    const {oneUser} = props;
    return (
        <div>
            {oneUser.id} - {oneUser.name}
            <button>details...</button>
        </div>
    )
}