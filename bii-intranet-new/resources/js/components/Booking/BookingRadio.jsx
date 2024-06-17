import {useState} from "react";
import classNames from "classnames";
import {RadioGroup} from "@headlessui/react";
import {UsersIcon} from "@heroicons/react/16/solid";

function BookingRadio() {
    const rooms = [
        { name: 'Meeting Room 1.1', location: 'Matrikel 1, Højbro Plads 10', participants: '2' },
        { name: 'Meeting Room 1.2', location: 'M0.8 - Oxygen, M0.9 - Fluorine', participants: '3' },
        { name: 'Meeting Room 1.3', location: 'Matrikel 1, Højbro Plads 10', participants: '6' },
        { name: 'Meeting Room 1.4', location: 'M0.8 - Oxygen, M0.9 - Fluorine', participants: '8' },
    ]
    const [selected, setSelected] = useState(rooms[0])

    return (
        <RadioGroup value={selected} onChange={setSelected}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {rooms.map((room) => (
                    <RadioGroup.Option
                        key={room.name}
                        value={room}
                        className={({ active }) =>
                            classNames(
                                active ? 'border-nav ring-2 ring-nav' : 'border-nav-hover',
                                'relative block cursor-pointer rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between'
                            )}>
                        {({ active, checked }) => (
                            <>
                                <span className="flex items-center">
                                    <span className="flex flex-col text-sm">
                                        <RadioGroup.Label as="span" className="font-medium text-primary-header">
                                            {room.name}
                                        </RadioGroup.Label>

                                        <RadioGroup.Description as="span" className="text-nav">
                                            {room.location}
                                        </RadioGroup.Description>
                                    </span>
                                </span>

                                <RadioGroup.Description as="span" className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right">
                                    <span className="font-medium text-primary-header">
                                        {room.participants}
                                    </span>

                                    <span className="ml-1 text-nav sm:ml-0">
                                        <UsersIcon
                                            className="h-5 w-5"
                                        />
                                    </span>
                                </RadioGroup.Description>

                                <span
                                    className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-nav' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-lg'
                                    )}
                                    aria-hidden="true"
                                />
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    );
}

export default BookingRadio;
