package org.example;

import org.junit.Test;

import static org.junit.Assert.*;


public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals: checks if two values are equal
        assertEquals(5, 2 + 3);

        // Assert true: condition must be true
        assertTrue(5 > 3);

        // Assert false: condition must be false
        assertFalse(5 < 3);

        // Assert null: object must be null
        assertNull(null);

        // Assert not null: object must not be null
        assertNotNull(new Object());
    }
}
