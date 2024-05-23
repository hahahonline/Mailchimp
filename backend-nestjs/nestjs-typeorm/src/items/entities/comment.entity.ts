import { Column, Entity, ManyToOne } from "typeorm";
import { AbstractEntity } from "src/database/abstract.entity";
import { Item } from "./item.entity";

@Entity()
export class Comment extends AbstractEntity<Comment>{
    @Column()
    comments: string;

    @ManyToOne(() => Item, (item) => item.comments)
    item: Item;
}