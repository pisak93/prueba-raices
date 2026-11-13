-- Pega esto en Supabase -> SQL Editor -> Run
-- (si ya creaste tus tablas con otros nombres, NO lo ejecutes: ajusta los nombres en el código)

create table if not exists recetas (
  id bigint generated always as identity primary key,
  titulo text not null,
  categoria text not null,      -- Aromáticas | Remedios | Batidos | Jugos
  beneficio text,
  tiempo text,
  ingredientes text,
  faltante text,
  guardada boolean default false
);

create table if not exists cosechas (
  id text primary key,          -- ej: 'hierbabuena'
  nombre text not null,
  categoria text not null,      -- Hierbas aromáticas | Frutas | Verduras
  icono text,
  en_huerta boolean default false   -- true = ya está en "Mi huerta"
);

insert into cosechas (id, nombre, categoria, icono, en_huerta) values
 ('hierbabuena','Hierbabuena','Hierbas aromáticas','🌿',true),
 ('manzanilla','Manzanilla','Hierbas aromáticas','🌼',true),
 ('limoncillo','Limoncillo','Hierbas aromáticas','🌱',true),
 ('limon','Limón','Frutas','🍋',true),
 ('mora','Mora','Frutas','🫐',true),
 ('banano','Banano','Frutas','🍌',true),
 ('toronjil','Toronjil','Hierbas aromáticas','🌿',false),
 ('romero','Romero','Hierbas aromáticas','🌱',false),
 ('fresa','Fresa','Frutas','🍓',false),
 ('tomate','Tomate','Verduras','🍅',false)
on conflict (id) do nothing;

insert into recetas (titulo, categoria, beneficio, tiempo, ingredientes, faltante, guardada) values
 ('Aromática de manzanilla y hierbabuena','Aromáticas','Digestión','10 min',null,null,true),
 ('Jarabe de limón, miel y jengibre','Remedios','Tos','10 min',null,null,false),
 ('Batido verde de espinaca y pepino','Batidos','Energía','5 min',null,null,false),
 ('Jugo de mora','Jugos','Defensas','5 min',null,null,true),
 ('Aromática de toronjil','Aromáticas','Dormir','10 min',null,'Toronjil',false),
 ('Batido de banano y mora','Batidos','Defensas','5 min',null,null,false),
 ('Batido de fresa y banano','Batidos','Energía','5 min',null,'Fresa',false),
 ('Batido de mango y jengibre','Batidos','Digestión','5 min',null,'Mango',false),
 ('Limonada de hierbabuena','Jugos','Refresca','5 min','limón',null,false),
 ('Jugo de pepino y limón','Jugos','Hidrata','5 min',null,null,false),
 ('Jugo de naranja y zanahoria','Jugos','Vista y defensas','5 min',null,'Naranja',false),
 ('Limoncillo con jengibre','Aromáticas','Gripa','15 min',null,null,false),
 ('Hierbabuena con limón','Aromáticas','Refrescante','10 min',null,null,false),
 ('Té de romero','Aromáticas','Circulación','10 min',null,null,false),
 ('Vapor de hierbabuena','Remedios','Nariz tapada','10 min',null,null,false),
 ('Manzanilla tibia','Remedios','Digestión','10 min',null,null,false);

-- PERMISOS (RLS): sin esto Supabase devuelve listas vacías []
alter table recetas enable row level security;
alter table cosechas enable row level security;

create policy "leer recetas"   on recetas  for select using (true);
create policy "leer cosechas"  on cosechas for select using (true);
create policy "editar cosechas" on cosechas for update using (true) with check (true);
create policy "editar recetas" on recetas  for update using (true) with check (true);
