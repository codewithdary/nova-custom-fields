import React from "react";
import StripContent from "../../Helper/StripContent.jsx";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {Card, CardHeader, Input, Typography, CardBody, Chip} from "@material-tailwind/react";

export const SortableTable = ({headers, rows}) => {
    return (
        <Card className="h-full w-full bg-lightest border-2 font-poppins">
            <CardBody className="overflow-scroll px-0 p-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {headers.map((head, index) => (
                                <th
                                    key={head}
                                    className="rounded-l-xl border-nav-hover bg-light p-4 transition-colors hover:bg-light">
                                    <Typography
                                        variant="small"
                                        className="text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                                        {head}{" "}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map(
                            (row, index) => {
                                const isLast = index === rows.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        className="font-poppins text-nav font-bold">
                                                        {row.name}
                                                    </Typography>

                                                    <Typography
                                                        variant="small"
                                                        className="font-poppins font-normal text-paragraph">
                                                        {row.description && (
                                                            <StripContent
                                                                slice={10}
                                                                content={row.description}
                                                            />
                                                        )} ...
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    className="font-poppins text-nav font-bold"
                                                    variant="small">
                                                    {row.bii_program ? row.bii_program.name : '-'}
                                                </Typography>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    className="font-poppins"
                                                    variant="ghost"
                                                    size="sm"
                                                    value={row.is_logged_admin ? "true" : "false"}
                                                    color={row.is_logged_admin ? "green" : "red"}
                                                />
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    className="font-poppins"
                                                    variant="ghost"
                                                    size="sm"
                                                    value={row.is_active ? "Onboarded" : "Offboarded"}
                                                    color={row.is_active ? "green" : "blue-gray"}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}