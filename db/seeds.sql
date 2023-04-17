INSERT INTO department (name)
    VALUES  ("Executive Branch"),
            ("Sales"),
            ("Human Relations");

INSERT INTO role (title, salary, department_id)
    VALUES  ("CEO", 1000000.00, 1),
            ("Co-CEO", 750000.00, 1),
            ("Head Seller", 35000.00, 2),
            ("Sales Team", 0.00, 2),
            ("HR Manager", 70000.00, 3),
            ("Firing Specialist", 72500.00, 3),
            ("Payroll", 50000.00, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
    VALUES  (2363, "Jane", "Doe", 1, NULL),
            (4865, "Tommy", "McVillian", 2, NULL),
            (6652, "Priscilla", "Sanders", 3, NULL),
            (7942, "Grant", "LeMante", 4, 6652),
            (0913, "Charlie", "Goad", 4, 6652),
            (6431, "Miskey", "Goad", 4, 6652),
            (5632, "Ellie", "Goad", 5, NULL),
            (1203, "Cider", "Freeman", 6, NULL),
            (1291, "Cash", "Robinson", 7, 5632);