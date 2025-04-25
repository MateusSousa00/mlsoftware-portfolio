import createNextIntPlugin from "next-intl/plugin"

const withNextIntl = createNextIntPlugin()

/** @type {import('next').NextConfig} */
const NextConfig = {}

export default withNextIntl(NextConfig)