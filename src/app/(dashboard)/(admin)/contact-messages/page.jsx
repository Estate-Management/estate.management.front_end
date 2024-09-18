import SectionTitle from "@/components/common/sectionTitle/SectionTitle";
import MessageList from "@/components/dashboard/admin/contact-messages/MessageList";
import React from "react";

const ContactMessagesPage = () => {
  return (
    <>
      <SectionTitle>Contact Messages</SectionTitle>
      <MessageList />
    </>
  );
};

export default ContactMessagesPage;
