import React from 'react';
/**
 * Função para destacar partes de um texto
 * @param {string} text Texto
 * @param {string|RegExp} highlight Parte do texto a ser destacada
 * @param {object} options Propriedades do <span> para as partes destacadas
 * @return {Array} Array de elementos React
 */
export function applyHighlight(text, highlight, options = {}) {
    if (text && highlight) {
        const regex = highlight instanceof RegExp ? highlight : new RegExp(highlight, "gmi");
        let match;
        let lastIndex = 0;
        const textParts = [];
        while ((match = regex.exec(text))) {
            const start = match.index;
            const end = regex.lastIndex;
            textParts.push(
                <span key={'text-' + lastIndex}>
                    {text.substring(lastIndex, start)}
                </span>
            );
            textParts.push(
                <span {...options} key={'high-' + start} >
                    {text.substring(start, end)}
                </span>
            );
            lastIndex = end;
        }
        if (!textParts.length) return text;
        textParts.push(
            <span key={'text-' + lastIndex}>
                {text.substring(lastIndex, text.lastIndex)}
            </span>
        );
        return textParts;
    }
    return text;
}
