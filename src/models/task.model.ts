export class Task{
    constructor(
        public _id: string,
        public name: string,
        public type: string,
        public status: string,
        public share: {
            user_name: string,
            share_status: string
        },
        public edit_time: {
            create: number,
            last_edited: number
        },
        public time: {
            start_time: string,
            duration: string,
            date: string
        },
        public priority: string,
        public task_place: {
            place_type: {
                formated_name: string,
                name: string,
                icon: string
            },
            place_company: {
                formated_name: string,
                name: string,
                icon: string
            }
        },
        public location: {
            address: string,
            place_id: string,
            geometry: {
                location: {
                    lat: number,
                    lng: number
                }
            }
        }
    ){}
}