import {
  mysqlTable,
  int,
  text,
  varchar,
  timestamp
} from "drizzle-orm/mysql-core";


export const users = mysqlTable("users", {
  id:int("id").autoincrement().primaryKey(),
  name:varchar("name", {length: 255}).notNull(),
  userName:varchar("username", {length: 255}).unique().notNull(),
  password:text("password").notNull(),
  email:varchar("email", {length: 255}).unique().notNull(),
  phone:varchar("phone", {length: 255}).notNull(),
  deletedAt:timestamp("deleted_at"),
  createdAt:timestamp("created_at").defaultNow().notNull(),
  updatedAt:timestamp("updated_at").defaultNow().onUpdateNow().notNull(),

});

export const sessions = mysqlTable("sessions", {
  id:varchar("id").primaryKey().notNull(),
  userId:int("user_id").notNull().references(() =>  users.id,{onDelete: "cascade", onUpdate: "cascade"}),
  userAgent:text("user_agent").notNull(),
  ip:varchar("ip_address", {length: 255}).notNull(),
  expiresAt:timestamp("expires_at").notNull(),
  createdAt:timestamp("created_at").defaultNow().notNull(),
  updatedAt:timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});