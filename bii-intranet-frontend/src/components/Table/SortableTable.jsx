import {MagnifyingGlassIcon, ChevronUpDownIcon,} from "@heroicons/react/24/outline";
import {Card, CardHeader, Input, Typography, CardBody, Chip, Avatar} from "@material-tailwind/react";
import {Pagination} from "./Paginaton";

export const SortableTable = ({headers, rows}) => {
    return (
        <Card className="h-full w-full bg-lightest border-2 font-poppins">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none bg-lightest">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row float-right">
                    <div className="w-full md:w-72">
                        <Input
                            className="bg-white"
                            label="Search"
                            icon={
                            <MagnifyingGlassIcon
                                className="h-5 w-5"
                            />
                        }
                        />
                    </div>
                </div>
            </CardHeader>

            <CardBody className="overflow-scroll px-0 p-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {headers.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-nav-hover bg-light p-4 transition-colors hover:bg-light">
                                    <Typography
                                        variant="small"
                                        className="text-xs uppercase flex text-nav items-center justify-between gap-2 font-poppins font-bold leading-none">
                                        {head}{" "}
                                        {index !== headers.length - 1 && (
                                            <ChevronUpDownIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                    {rows.map(
                        ({ img, name, email, program, note, visibility, date }, index) => {
                            const isLast = index === rows.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Avatar src={img} alt={name} size="sm" />
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    className="font-poppins text-nav font-bold">
                                                    {name}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    className="font-poppins font-normal text-paragraph">
                                                    {email}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <Typography
                                                className="font-poppins text-nav font-bold"
                                                variant="small">
                                                {program}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-poppins text-nav font-bold">
                                            {date}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="w-max">
                                            <Chip
                                                className="font-poppins"
                                                variant="ghost"
                                                size="sm"
                                                value={visibility ? "Visible" : "Off boarded"}
                                                color={visibility ? "green" : "blue-gray"}
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

            <Pagination />
        </Card>
    );
}