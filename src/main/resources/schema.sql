CREATE TABLE bonbon_entity (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               name VARCHAR(255),
                               description VARCHAR(255)
);

CREATE TABLE rating_entity (
                               id BIGINT AUTO_INCREMENT PRIMARY KEY,
                               bonbon_id BIGINT,
                               rating INT,
                               review VARCHAR(255),
                               FOREIGN KEY (bonbon_id) REFERENCES bonbon_entity(id)
);
