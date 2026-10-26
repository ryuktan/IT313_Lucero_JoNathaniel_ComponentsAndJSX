# IT313 Components and JSX – Student Roster Card Renderer

## Problem
Build an Expo/React Native screen that renders a list of enrolled students as reusable cards. Each card shows the student's name, course, and units, and displays a "Full Load" label only when `isFullLoad` is true. A header above the cards shows the total number of students, computed from the array.

## Component structure
- `StudentCard` – A reusable functional component that receives `name`, `course`, `units`, and `isFullLoad` as destructured props. It conditionally renders the "Full Load" label using `{isFullLoad && <Text>Full Load</Text>}`.
- `StudentRoster` – The parent component that holds the `students` array. It renders the header with a JSX expression and maps over the array to render one `StudentCard` per student with `key={student.id}`.
- `App` – The entry file that wraps `StudentRoster` in a `SafeAreaView`.

## How to run
1. Install dependencies: `npm install`
2. Start Expo: `npx expo start`
3. Open the app in Expo Go or an emulator.

## Key-prop experiment
Temporarily using the array index as the `key` and reversing the list causes React to reuse components by position. If a card has local state (e.g., a star toggle), the state stays with the position instead of the student. Using `key={student.id}` keeps each card's identity tied to the student.