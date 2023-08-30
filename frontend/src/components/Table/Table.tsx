import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';
import './Table.css'

type TableProps = {
    darkMode?: boolean
    children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;


const Table: React.FC<TableProps> & { Header: React.FC<TableHeaderProps>, Head: React.FC<TableHeadProps>, Body: React.FC<TableBodyProps>, Row: React.FC<TableRowProps>, Cell: React.FC<TableCellProps> } = ({ darkMode = false, children, ...props }) => {

    return (
        <table {...props} className={`table ${darkMode ? 'darkMode' : ''} ${props.className ? props.className : ''}`}>
            {children}
        </table>
    );
};

type TableHeaderProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableHeader: React.FC<TableHeaderProps> = ({ children, ...props }) => {
    return (
        <thead {...props} className={`thead ${props.className ? props.className : ''}`}>
            {children}
        </thead>
    )
}

type TableHeadProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => {
    return (
        <th {...props} className={`th ${props.className ? props.className : ''}`}>
            {children}
        </th>
    )
}

type TableBodyProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => {
    return (
        <tbody {...props} className={`tbody ${props.className ? props.className : ''}`}>
            {children}
        </tbody>
    )
}

type TableRowProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
    return (
        <tr {...props} className={`tr ${props.className ? props.className : ''}`}>
            {children}
        </tr>
    )
}

type TableCellProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>;

const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => {
    return (
        <td {...props} className={`td ${props.className ? props.className : ''}`}>
            {children}
        </td>
    )
}

Table.Cell = TableCell
Table.Body = TableBody
Table.Row = TableRow
Table.Head = TableHead
Table.Header = TableHeader
export default Table