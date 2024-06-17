import {Button, CardFooter, Typography} from "@material-tailwind/react";

export const Pagination = () => {
    return(
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
                variant="small"
                className="font-poppins text-nav">
                Page 1 of 2
            </Typography>
            <div className="flex gap-2">
                <Button
                    className="font-poppins text-nav border-nav"
                    variant="outlined"
                    size="sm">
                    Previous
                </Button>
                <Button
                    className="font-poppins text-nav border-nav"
                    variant="outlined"
                    size="sm">
                    Next
                </Button>
            </div>
        </CardFooter>
    )
}