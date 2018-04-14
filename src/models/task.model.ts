export class Task{
    constructor(
        public id: number,
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
            start_time: number,
            end_time: number,
            duration: number
        },
        public priority: number,
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