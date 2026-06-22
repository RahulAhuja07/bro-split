"use client";
import {api} from "@/convex/_generated/api";
import { useConvexQuery } from '@/hooks/use-convex-query';
import React from 'react'

const ContactsPage = () => {
  const {data, isLoading}= useConvexQuery(api.contacts.getAllContacts);
  return <div>
    Contacts Page
  </div>
}

export default ContactsPage;
