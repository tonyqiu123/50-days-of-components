import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import './Table.css'

type TableProps = {
    darkMode?: boolean
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;


export const Table: React.FC<TableProps> = ({ darkMode = false, children, ...props }) => {

    return (
        <table {...props} className={`table ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`}>
            {children}
        </table>
    );
};

type TableHeaderProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
    return (
        <thead {...props} className={`thead ${props.className ? props.className : ''}`}>
            {children}
        </thead>
    )
}

type TableHeadProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
    return (
        <th {...props} className={`th ${props.className ? props.className : ''}`}>
            {children}
        </th>
    )
}

type TableBodyProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
    return (
        <tbody {...props} className={`tbody ${props.className ? props.className : ''}`}>
            {children}
        </tbody>
    )
}

type TableRowProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
    return (
        <tr {...props} className={`tr ${props.className ? props.className : ''}`}>
            {children}
        </tr>
    )
}

type TableCellProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
    return (
        <td {...props} className={`td ${props.className ? props.className : ''}`}>
            {children}
        </td>
    )
}