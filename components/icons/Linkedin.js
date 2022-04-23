/**
 * Icon Component
 *
 * @name LinkedinIcon
 * @param {String} fill - Icon fill color
 * @param {Number} width - Icon width
 * @param {Height} height - Icon height
 * @param {String | Object} className - styles
 */
export default function LinkedinIcon({ fill, width, height, className }) {
    return (
        <svg
            width={width ? width : 47}
            height={height ? height : 47}
            viewBox="0 0 47 47"
            fill="none"
            className={className ? className : ""}
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M41.7778 0C43.1628 0 44.4911 0.550197 45.4704 1.52955C46.4498 2.50891 47 3.8372 47 5.22222V41.7778C47 43.1628 46.4498 44.4911 45.4704 45.4704C44.4911 46.4498 43.1628 47 41.7778 47H5.22222C3.8372 47 2.50891 46.4498 1.52955 45.4704C0.550197 44.4911 0 43.1628 0 41.7778V5.22222C0 3.8372 0.550197 2.50891 1.52955 1.52955C2.50891 0.550197 3.8372 0 5.22222 0H41.7778ZM40.4722 40.4722V26.6333C40.4722 24.3758 39.5754 22.2106 37.979 20.6143C36.3827 19.0179 34.2176 18.1211 31.96 18.1211C29.7406 18.1211 27.1556 19.4789 25.9022 21.5156V18.6172H18.6172V40.4722H25.9022V27.5994C25.9022 25.5889 27.5211 23.9439 29.5317 23.9439C30.5012 23.9439 31.431 24.329 32.1165 25.0146C32.8021 25.7001 33.1872 26.6299 33.1872 27.5994V40.4722H40.4722ZM10.1311 14.5178C11.2945 14.5178 12.4103 14.0556 13.233 13.233C14.0556 12.4103 14.5178 11.2945 14.5178 10.1311C14.5178 7.70278 12.5594 5.71833 10.1311 5.71833C8.96077 5.71833 7.83836 6.18325 7.01081 7.01081C6.18325 7.83836 5.71833 8.96077 5.71833 10.1311C5.71833 12.5594 7.70278 14.5178 10.1311 14.5178ZM13.7606 40.4722V18.6172H6.52778V40.4722H13.7606Z"
                fill={fill ? fill : "#03A9F4"}
            />
        </svg>
    );
}
