import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_license: string;

    @Column()
    admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    avatar?: string

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
        if(!this.avatar) {
            this.avatar = null;
        }
    }

};

export { User };