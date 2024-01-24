-- Users
INSERT INTO users (email, password, firstname, lastname) VALUES
                                                             ('arinda@example.com', '$2a$10$x9otGsHXgsB4j.m7oewPFeHxQdyntfVRYRzM2jm8ACV.R6tBuIpdu', 'Arinda', 'One'),--123 for all
                                                             ('esther@example.com', '$2a$10$.WvyjB7GTnFFAB7Ly6EKV.ivpSCZhWm2vEmDTjeEveLPwYXIuzKHO', 'Esther', 'Two'),
                                                             ('ethan@example.com', '$2a$10$C12P.zxG8MujPZevVAEnQeLt8P20W61Bt0pGpODjRalwmUX5Nh24K', 'Ethan', 'Three'),
                                                             ('hansel@example.com', '$2a$10$FzWQlXFW4deqXfZyHompzO5SgSR6TH20a62Y1MdgKrmHccHluegQm', 'Hansel', 'Four');


-- Posts
INSERT INTO post (title, content, author, user_id) VALUES
                                                       ('First Post', 'Content for the first post', 'Author 1', 1),

                                                       ('Second Post', 'Content for the second post', 'Author 2', 2),
                                                       ('Another Post', 'Another content for the second post', 'Author 2', 2),

                                                       ('Third Post', 'Content for the third post', 'Author 3', 3),
                                                       ('Yet Another Post', 'More content for the third post', 'Author 3', 3),
                                                       ('More Posts', 'Content for yet another post', 'Author 3', 3),

                                                       ('Fourth Post', 'Content for the fourth post', 'Author 4', 4),
                                                       ('Additional Post', 'Content for the additional post', 'Author 4', 4),
                                                       ('Another One', 'Content for another one post', 'Author 4', 4),
                                                       ('Final Post', 'Content for the final post', 'Author 4', 4);

-- Comments
INSERT INTO comment (name, post_id) VALUES
                                        ('Nice post!', 1),

                                        ('Interesting thoughts.', 2),
                                        ('I never thought of it that way.', 2),

                                        ('Good read, thanks.', 3),
                                        ('I have some questions.', 3),
                                        ('Could you elaborate?', 3),

                                        ('Agreed!', 4),
                                        ('Not sure I understand.', 4),
                                        ('Can you provide sources?', 4),
                                        ('This is a great discussion.', 4);

--role
INSERT INTO role ( role)
VALUES ('USER');
INSERT INTO role (role)
VALUES ('ADMIN');


-- Associating all users with the 'USER' role
INSERT INTO users_roles (user_id, roles_id) VALUES
                                              (1, 1), -- Assuming '1' is the ID for Arinda after insertion
                                              (2, 1), -- Assuming '2' is the ID for Esther after insertion
                                              (3, 1), -- Assuming '3' is the ID for Ethan after insertion
                                              (4, 1); -- Assuming '4' is the ID for Hansel after insertion


-- Arinda is also an admin:
INSERT INTO users_roles (user_id, roles_id) VALUES
    (1, 2); -- '2' is the ID for 'ADMIN' role

