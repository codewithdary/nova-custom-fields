import {Button, CardFooter, Typography} from "@material-tailwind/react";

export const Pagination = ({current, last, previousUrl, nextUrl}) => {
    return(
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
                variant="small"
                className="font-poppins text-nav">
                Page {current} of {last}
            </Typography>

            <div className="flex gap-2">
                {previousUrl && (
                    <a href={previousUrl}>
                        <Button
                            className="font-poppins text-nav border-nav"
                            variant="outlined"
                            size="sm">
                            Previous
                        </Button>
                    </a>
                )}
                <a href={nextUrl}>
                    <Button
                        className="font-poppins text-nav border-nav"
                        variant="outlined"
                        size="sm">
                        Next
                    </Button>
                </a>
            </div>
        </CardFooter>
    )
}