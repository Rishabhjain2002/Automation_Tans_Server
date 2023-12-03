CREATE TABLE IF NOT EXISTS public.userdb (
    ad_user character(40),
    host character(40),
    dbname character(40),
    schema_user character(40),
    active boolean,
    operation character(40),
    last_operation date,
    id serial PRIMARY KEY
);

-- Corrected insert queries for the public.userdb table
INSERT INTO public.userdb (ad_user, host, dbname, schema_user, active, operation, last_operation)
VALUES ('Vivek C', 'vivekc', 'MISUAT', 'SYSTEM', true, 'SYSACTMGR', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDDB', 'SYSOWNER', true, 'VIVEK', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDDB', 'CUSTOM', true, 'VIVEK', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDDB', 'SYSTEM', true, 'APPDUSR', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDDB', 'DAMUSER', true, 'your_operation_value', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDCSIS', 'SYSTEM', true, 'APPDUSR', '2023-11-20'),
       ('Vivek C', 'vivekc', 'FEDCSIS', 'DAMUSER', true, 'your_operation_value', '2023-11-20');

INSERT INTO public.userdb (ad_user, host, dbname, schema_user, active, operation, last_operation)
VALUES ('Mithun U', 'mithunu', 'MISUAT', 'MITHUN', true, 'your_operation_value', '2023-11-20'),
       ('Mithun U', 'mithunu', 'FEDDB', 'MITHUN', true, 'DAMUSER', '2023-11-20');

INSERT INTO public.userdb (ad_user, host, dbname, schema_user, active, operation, last_operation)
VALUES ('Sreelal T S', 'sreelalts', 'MISUAT', 'SREELAL', true, 'your_operation_value', '2023-11-20'),
       ('Sreelal T S', 'sreelalts', 'FEDCSIS', 'APPDUSR', true, 'your_operation_value', '2023-11-20');
