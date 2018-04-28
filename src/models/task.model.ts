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
            end_time: string,
            date: string
        },
        public priority: string,
        public task_place: {
            place_type: string,
            palce_key_word: string
        },
        public location: {
            address: string,
            place_id: string,
            coordinate: {
                lat: number,
                long: number
            }
        }
    ){}
}