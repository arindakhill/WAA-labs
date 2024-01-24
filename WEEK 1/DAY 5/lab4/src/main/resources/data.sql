-- Users
INSERT INTO users (name) VALUES
                             ('Arinda'),
                             ('Esther'),
                             ('Ethan'),
                             ('Hansel');

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
