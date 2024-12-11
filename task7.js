
export function rubricPerfect(score) {
    score = parseInt(score);

    if (score === 11) {
        return "Perfect";
    } else if (score >= 5) {
        return "Pass";
    } else {
        return "Fail";
    }
}
